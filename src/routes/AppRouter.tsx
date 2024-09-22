import {Route, Routes} from "react-router-dom";

import HomePage from "../pages/HomePage.tsx";
import CoursePage from "../pages/CoursePage.tsx";

const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/courses" element={<CoursePage/>}/>
      </Routes>
  )
}

export default AppRouter;