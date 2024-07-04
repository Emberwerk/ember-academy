import { SignIn } from "@clerk/remix";

export default () => (
    <div className='flex flex-col h-screen items-center justify-center'>
        <SignIn />
    </div>
)