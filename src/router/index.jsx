import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/user-layout";
import HomePage from "../pages/home-page";
import CoursesPage from "../pages/courses-page";
import EventsPage from "../pages/events-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import LoginPage from "../pages/login-page";
import DashboardPage from "../pages/dashboard/dashboard-page";
import AdminPage from "../pages/dashboard/admin-page";
import PrivateRoute from "./private-route";
import { config } from "../helpers/config";
import Error403Page from "../pages/errors/error403-page";
import Error404Page from "../pages/errors/error404-page";
import ManagerPage from "../pages/dashboard/manager-page";
import AssistantManagerPage from "../pages/dashboard/assistant-manager-page";
import LessonPage from "../pages/dashboard/lesson-page";
import TeacherPage from "../pages/dashboard/teacher-page";
import StudentPage from "../pages/dashboard/student-page";
import ContactMessagePage from "../pages/dashboard/contact-message-page";
import StudentInfoPage from "../pages/dashboard/student-info-page";
import MeetPage from "../pages/dashboard/meet-page";
import ChooseLessonPage from "../pages/dashboard/choose-lesson-page";
import GradesMeetsPage from "../pages/dashboard/grades-meets-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: (
              <PrivateRoute roles={config.pageRoles.dashboard}>
                <DashboardPage />
              </PrivateRoute>
            ),
          },
          {
            path: "admin-management",
            element: (
              <PrivateRoute roles={config.pageRoles.adminManagement}>
                <AdminPage />
              </PrivateRoute>
            ),
          },
          {
            path: "manager-management",
            element: (
              <PrivateRoute roles={config.pageRoles.managerManagement}>
                <ManagerPage />
              </PrivateRoute>
            ),
          },
          {
            path: "assistant-manager-management",
            element: (
              <PrivateRoute roles={config.pageRoles.assistantManagerManagement}>
                <AssistantManagerPage />
              </PrivateRoute>
            ),
          },
          {
            path: "lesson-management",
            element: (
              <PrivateRoute roles={config.pageRoles.lessonManagement}>
                <LessonPage />
              </PrivateRoute>
            ),
          },
          {
            path: "teacher-management",
            element: (
              <PrivateRoute roles={config.pageRoles.teacherManagement}>
                <TeacherPage />
              </PrivateRoute>
            ),
          },
          {
            path: "student-management",
            element: (
              <PrivateRoute roles={config.pageRoles.studentManagement}>
                <StudentPage />
              </PrivateRoute>
            ),
          },
          {
            path: "contact-messages",
            element: (
              <PrivateRoute roles={config.pageRoles.contactMessages}>
                <ContactMessagePage />
              </PrivateRoute>
            ),
          },
          {
            path: "student-info-management",
            element: (
              <PrivateRoute roles={config.pageRoles.studentInfoManagement}>
                <StudentInfoPage />
              </PrivateRoute>
            ),
          },
          {
            path: "meet-management",
            element: (
              <PrivateRoute roles={config.pageRoles.meetManagement}>
                <MeetPage />
              </PrivateRoute>
            ),
          },
          {
            path: "choose-lesson",
            element: (
              <PrivateRoute roles={config.pageRoles.chooseLesson}>
                <ChooseLessonPage />
              </PrivateRoute>
            ),
          },
          {
            path: "grades-meets",
            element: (
              <PrivateRoute roles={config.pageRoles.gradesAndMeets}>
                <GradesMeetsPage />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "unauthorized",
        element: <Error403Page />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
