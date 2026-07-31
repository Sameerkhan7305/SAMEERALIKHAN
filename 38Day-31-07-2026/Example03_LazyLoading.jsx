import { lazy, Suspense, useState } from "react";

const DashboardScreen = lazy(() => import("./pages/DashboardPage"));

const ProfileScreen = lazy(() => import("./pages/UserProfilePage"));

function Example03_LazyLoading() {

    const [currentSection, setCurrentSection] = useState("dashboard");

    return (

        <div>

            <h1>Lazy Loading Example</h1>

            <button
                onClick={() => setCurrentSection("dashboard")}
            >
                Dashboard
            </button>

            <button
                onClick={() => setCurrentSection("profile")}
            >
                Profile
            </button>

            <Suspense
                fallback={<h2>Loading Component...</h2>}
            >

                {

                    currentSection === "dashboard"

                    ?

                    <DashboardScreen/>

                    :

                    <ProfileScreen/>

                }

            </Suspense>

        </div>

    );

}

export default Example03_LazyLoading;