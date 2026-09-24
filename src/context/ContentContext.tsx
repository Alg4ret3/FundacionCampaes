import React, { createContext, useContext, useState, useEffect } from "react";
import { Activity } from "../types";
import { activities as initialActivities } from "../constants/DataActivities";
import { testimonials as initialTestimonials } from "../constants/DataTestimonials";
import { galleryImages as initialGallery } from "../constants/DataGalley";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category?: string;
}

export interface SiteTextInfo {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  aboutTitle: string;
  aboutDescription: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
}

const defaultSiteInfo: SiteTextInfo = {
  heroTitle: "Construyendo Paz y Futuro para las Comunidades",
  heroSubtitle: "Impulsamos la transformación social, la educación y el desarrollo ambiental sostenible en Colombia.",
  heroBadge: "Fundación Caminos de Paz y Esperanza",
  aboutTitle: "Unidos por el bienestar de nuestras comunidades",
  aboutDescription: "Somos una organización sin fines de lucro comprometida con el fortalecimiento del tejido social, la protección del medio ambiente y el desarrollo comunitario.",
  contactEmail: "funpazyesperanza@gmail.com",
  contactPhone: "+57 318 509 4789",
  contactAddress: "Calle Principal #12-34, Colombia",
};

interface ContentContextType {
  activities: Activity[];
  testimonials: TestimonialItem[];
  gallery: GalleryItem[];
  siteInfo: SiteTextInfo;
  isCloudConnected: boolean;
  addActivity: (activity: Omit<Activity, "id">) => Promise<void>;
  updateActivity: (id: string, updated: Partial<Activity>) => Promise<void>;
  deleteActivity: (id: string) => Promise<void>;
  addGalleryItem: (item: Omit<GalleryItem, "id">) => Promise<void>;
  deleteGalleryItem: (id: string) => Promise<void>;
  addTestimonial: (testimonial: Omit<TestimonialItem, "id">) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  updateSiteInfo: (info: Partial<SiteTextInfo>) => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "campaes_dynamic_content_v1";

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activities, setActivities] = useState<Activity[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_activities`);
    return saved ? JSON.parse(saved) : initialActivities;
  });

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_testimonials`);
    return saved ? JSON.parse(saved) : (initialTestimonials as TestimonialItem[]);
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_gallery`);
    if (saved) return JSON.parse(saved);
    return (initialGallery as string[]).map((url, idx) => ({
      id: String(idx + 1),
      url,
      title: `Imagen Campaes ${idx + 1}`,
    }));
  });

  const [siteInfo, setSiteInfo] = useState<SiteTextInfo>(() => {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY}_siteInfo`);
    return saved ? JSON.parse(saved) : defaultSiteInfo;
  });

  // Cargar desde Supabase al iniciar si está configurado
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    const fetchSupabaseData = async () => {
      try {
        console.log("🔄 [Supabase] Obteniendo registros de la base de datos...");

        // Cargar Actividades
        const { data: actData, error: actErr } = await supabase.from("activities").select("*").order("date", { ascending: false });
        if (actErr) console.error("❌ [Supabase] Error en la tabla 'activities':", actErr.message);
        if (actData && actData.length > 0) {
          console.log(`✅ [Supabase] Actividades cargadas (${actData.length} registros)`);
          setActivities(actData);
        }

        // Cargar Testimonios
        const { data: testData, error: testErr } = await supabase.from("testimonials").select("*");
        if (testErr) console.error("❌ [Supabase] Error en la tabla 'testimonials':", testErr.message);
        if (testData && testData.length > 0) {
          console.log(`✅ [Supabase] Testimonios cargados (${testData.length} registros)`);
          setTestimonials(testData);
        }

        // Cargar Galería
        const { data: galData, error: galErr } = await supabase.from("gallery").select("*");
        if (galErr) console.error("❌ [Supabase] Error en la tabla 'gallery':", galErr.message);
        if (galData && galData.length > 0) {
          console.log(`✅ [Supabase] Galería cargada (${galData.length} registros)`);
          setGallery(galData);
        }

        // Cargar Información del Sitio
        const { data: infoData, error: infoErr } = await supabase.from("site_info").select("*").single();
        if (infoErr && infoErr.code !== "PGRST116") console.error("❌ [Supabase] Error en la tabla 'site_info':", infoErr.message);
        if (infoData) {
          console.log("✅ [Supabase] Info del sitio cargada");
          setSiteInfo(infoData.content);
        }
      } catch (err) {
        console.warn("⚠️ Usando respaldo local mientras se sincroniza Supabase:", err);
      }
    };

    fetchSupabaseData();
  }, []);

  // Persistir cambios locales
  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_activities`, JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_testimonials`, JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_gallery`, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}_siteInfo`, JSON.stringify(siteInfo));
  }, [siteInfo]);

  // Acciones CRUD sincronizadas con Supabase + Local
  const addActivity = async (activityData: Omit<Activity, "id">) => {
    const newActivity: Activity = {
      ...activityData,
      id: Date.now().toString(),
    };
    setActivities((prev) => [newActivity, ...prev]);

    if (isSupabaseConfigured && supabase) {
      await supabase.from("activities").insert([newActivity]);
    }
  };

  const updateActivity = async (id: string, updated: Partial<Activity>) => {
    setActivities((prev) =>
      prev.map((act) => (act.id === id ? { ...act, ...updated } : act))
    );

    if (isSupabaseConfigured && supabase) {
      await supabase.from("activities").update(updated).eq("id", id);
    }
  };

  const deleteActivity = async (id: string) => {
    setActivities((prev) => prev.filter((act) => act.id !== id));

    if (isSupabaseConfigured && supabase) {
      await supabase.from("activities").delete().eq("id", id);
    }
  };

  const addGalleryItem = async (itemData: Omit<GalleryItem, "id">) => {
    const newItem: GalleryItem = {
      ...itemData,
      id: Date.now().toString(),
    };
    setGallery((prev) => [newItem, ...prev]);

    if (isSupabaseConfigured && supabase) {
      await supabase.from("gallery").insert([newItem]);
    }
  };

  const deleteGalleryItem = async (id: string) => {
    setGallery((prev) => prev.filter((item) => item.id !== id));

    if (isSupabaseConfigured && supabase) {
      await supabase.from("gallery").delete().eq("id", id);
    }
  };

  const addTestimonial = async (testimonialData: Omit<TestimonialItem, "id">) => {
    const newItem: TestimonialItem = {
      ...testimonialData,
      id: Date.now().toString(),
    };
    setTestimonials((prev) => [newItem, ...prev]);

    if (isSupabaseConfigured && supabase) {
      await supabase.from("testimonials").insert([newItem]);
    }
  };

  const deleteTestimonial = async (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));

    if (isSupabaseConfigured && supabase) {
      await supabase.from("testimonials").delete().eq("id", id);
    }
  };

  const updateSiteInfo = async (info: Partial<SiteTextInfo>) => {
    const updated = { ...siteInfo, ...info };
    setSiteInfo(updated);

    if (isSupabaseConfigured && supabase) {
      await supabase.from("site_info").upsert([{ id: "global", content: updated }]);
    }
  };

  return (
    <ContentContext.Provider
      value={{
        activities,
        testimonials,
        gallery,
        siteInfo,
        isCloudConnected: isSupabaseConfigured,
        addActivity,
        updateActivity,
        deleteActivity,
        addGalleryItem,
        deleteGalleryItem,
        addTestimonial,
        deleteTestimonial,
        updateSiteInfo,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent debe usarse dentro de un ContentProvider");
  }
  return context;
};
