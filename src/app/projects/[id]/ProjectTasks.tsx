export default function ProjectTasks() {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">주요 작업 내용</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>메인 페이지 UI/UX 개선</li>
                <li>반응형 디자인 적용</li>
                <li>데이터 상태 관리 최적화</li>
            </ul>
        </section>
    )
}

// const TaskItem = ({ task }: { task: string | { title: string; subTasks?: any[] } }) => {
//     return (
//         <li>
//             {typeof task === "string" ? (
//                 task
//             ) : (
//                 <>
//                     <strong>{task.title}</strong>
//                     {task.subTasks && (
//                         <ul className="list-disc pl-6 mt-2 space-y-1">
//                             {task.subTasks.map((subTask, index) => (
//                                 <TaskItem key={index} task={subTask} />
//                             ))}
//                         </ul>
//                     )}
//                 </>
//             )}
//         </li>
//     )
// }
