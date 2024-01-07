
import { Link, useLocation, useNavigate} from "react-router-dom"
import { useContext, useRef, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { toast } from "react-toastify"

export default function ForgotPassword() {
    const emailRef = useRef()
    const {sendResetPassword, loading, setLoading}=useContext(AuthContext)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")


     
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
           // setLoading(true)
            console.log('wait')
            await sendResetPassword(emailRef.current.value)
            navigate(from, { replace: true });
            console.log('done')
            setMessage("Check your inbox email")
            toast.success("Check your inbox email", {
                position: toast.POSITION.TOP_CENTER,
              });
        } catch (error) {
            console.log(error)
            setError("Failed to reset password")
        }
    
        setLoading(false)
        emailRef.current.value = ''
    }

    return (
        // disabled={loading}
        <>
            <div className="my-20">
                <div className="w-96 p-7 mx-auto">
                   <div className="shadow-2xl p-10 rounded-xl">
                   <h2 className=" mb-4 font-extrabold">Forgot Password</h2>
                    {message && <p className="text-cyan-600">{message}</p>}
                    <form onSubmit={handleSubmit}>
                     
                       <div className="" id="email">
                            <label className="mb-2">Email *</label>
                            <div className="flex items-center border-solid border-2 border-gray-300 hover:border-solid rounded-[12px]">
                            <input type="email" ref={emailRef} placeholder="Enter You Email" required className="input  focus:outline-none focus:ring-0 w-[100%]" />
                          </div>
                        
                          {error && <p className="text-red-700 my-4">{error}</p>}
                         
                         <button   className="btn btn-secondary w-full mt-2" type="submit">Reset</button>
                       </div>
                    </form>
                    <div className="w-100  mt-3">
                       
                       Need an account? <Link to="/login">Login</Link>
                   </div>
                   </div>
                   <div>

                   </div>
               
                </div>
            </div>
           
            
           
        </>
    )
}