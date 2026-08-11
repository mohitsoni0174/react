
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoutes';


const App = () => {

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white hide-scrollbar">

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        limit={3}
        closeOnClick
        draggable
        theme="dark"
        rtl={false}
        progressStyle={{
          background: "#84cc16", 
          height: "3px",
        }}
        
        toastStyle={{
          background: "#09090B",
          color: "#F4F4F5",
          fontSize: "14px",
          border: "1px solid #27272A",
          borderRadius: "16px",
          minHeight: "72px",
          padding: "14px 40px 14px 14px",
        }}
      />

      <AppRoutes />
      
    </div>
  )
}

export default App




