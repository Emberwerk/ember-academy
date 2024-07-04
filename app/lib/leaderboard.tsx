import { TableRow } from "~/types";

interface Props {
    data: TableRow[];
}

export default (props: Props) => (
    <table className='w-full border-collapse'>
        <thead>
            <tr>
                <th className='p-2 border-b-2 border-solid border-[#ffd699] bg-[#ffd699] text-left'>Rank</th>
                <th className='p-2 border-b-2 border-solid border-[#ffd699] bg-[#ffd699] text-left'>User</th>
                <th className='p-2 border-b-2 border-solid border-[#ffd699] bg-[#ffd699] text-left'>Projects Completed</th>
                <th className='p-2 border-b-2 border-solid border-[#ffd699] bg-[#ffd699] text-left'>Total Score</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <td className='p-2 border-b-2 border-solid border-[#ffd699]'>{row.rank}</td>
                    <td className='p-2 border-b-2 border-solid border-[#ffd699]'>{row.user}</td>
                    <td className='p-2 border-b-2 border-solid border-[#ffd699]'>{row.projects_completed}</td>
                    <td className='p-2 border-b-2 border-solid border-[#ffd699]'>{row.total_score}</td>
                </tr>
            ))}
        </tbody>
    </table>
)