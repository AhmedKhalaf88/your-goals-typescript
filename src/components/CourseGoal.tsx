// Method 1  type or interface

// import { type ReactNode } from "react";

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//     return (
//       <article>
//         <div>
//           <h2>{title}</h2>
//           {children}
//         </div>
//         <button>Delete</button>
//       </article>
//     );
//   }

// Method 2

import { type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  onDelete,
  id,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// Method 3

// import { type PropsWithChildren } from "react";

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// const CourseGoal = ({ title, children }: CourseGoalProps) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

// Method 4

// import { FC, type PropsWithChildren } from "react";

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
