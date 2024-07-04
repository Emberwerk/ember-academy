interface Props {
    projectName: string,
    projectDescription: string,
    level: 'beginner' | 'intermediate' | 'advanced',
    tags?: string[]
}

export default (props: Props) => (
    <div className='bg-[#fff9f1] border-2 border-solid border-[#ffd699] rounded-xl p-4 cursor-pointer transition-all duration-300 hover:animate-small-wiggle hover:shadow-orange'>
        <h3 className='font-semibold text-primary text-xl mb-4 mt-2'>{props.projectName}</h3>
        <p className='mb-2'>{props.projectDescription}</p>

        {props.level === 'beginner' ? (
            <div className='inline-block py-1 px-2 rounded-xl text-sm font-bold mt-3 bg-beginner text-beginner-darker'>Beginner</div>
        ) : props.level == 'intermediate' ? (
            <div className='inline-block py-1 px-2 rounded-xl text-sm font-bold mt-3 bg-intermediate text-intermediate-darker'>Intermediate</div>
        ) : props.level == 'advanced' ? (
            <div className='inline-block py-1 px-2 rounded-xl text-sm font-bold mt-3 bg-advanced text-advanced-darker'>Advanced</div>
        ) : (
            <div className='inline-block py-1 px-2 rounded-xl text-sm font-bold mt-3'>Unspecified</div>
        )}

        {props.tags?.map(tag => (
            <div key={tag} className={`inline-block py-1 px-2 rounded-xl text-sm font-bold mt-3`}>{tag}</div>
        ))}
    </div>
)