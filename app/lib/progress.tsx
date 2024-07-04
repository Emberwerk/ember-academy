interface Props {
    completed_projects: number;
    total_projects: number;
}

export default ({ completed_projects, total_projects }: Props) => {
    const total_progress = total_projects == 0 ? 0 : (completed_projects / total_projects) * 100

    return (
    <div className='bg-[#fff9f1] border-2 border-solid  border-[#ffd699] rounded-xl p-8 mt-4'>
        {completed_projects !== -1 && total_projects !== -1 ? (
            <>
                <h3 className='text-primary font-semibold text-2xl mb-4'>Overall Completion: <span id='completion-percentage'>{Math.round(total_progress)}%</span></h3>
                <div id='progress-bar' className='w-full mb-4 h-4 bg-[#ffd699] rounded-md overflow-hidden'>
                    <div id='progress' className='bg-primary h-full transition-all duration-500' style={{
                        width: total_progress + '%'
                    }}></div>
                </div>
                <p>Projects Completed: <span id='projects-completed'>{completed_projects}</span> / <span id="total-projects">{total_projects}</span></p>
            </>
        ) : (
            <>
                <h1>You must be logged in to see your own progress!</h1>
            </>
        )}
    </div>
    )
}