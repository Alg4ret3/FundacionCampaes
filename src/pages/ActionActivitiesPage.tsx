import { Navigation } from '../components/organisms/layout/Navigation';
import { ActionLinesSection } from '../components/organisms/sections/actions/ActionLinesSection';
import { ActivitiesSection } from '../components/organisms/sections/activities/ActivitiesSection';
import { Footer } from '../components/organisms/layout/Footer';

function ActionActivitiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ActionLinesSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
}

export default ActionActivitiesPage;