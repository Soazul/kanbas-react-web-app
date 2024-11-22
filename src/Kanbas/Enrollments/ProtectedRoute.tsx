import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  courseId,
}: {
  children: any;
  courseId: string;
}) {
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // Check if the user is enrolled in the given course
  const isEnrolledInCourse = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === courseId
  );

  // If not enrolled, redirect to the dashboard
  if (!isEnrolledInCourse) {
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return children;
}
