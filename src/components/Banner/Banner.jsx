import bannerBg from '../../assets/bg-shadow.png'
import bannerImg from '../../assets/banner-main.png'

import { ToastContainer, toast , Bounce} from 'react-toastify';


const Banner = ({ claimCoins }) => {

    const notify = () => {
        toast("Credit Added to your Account")
    }

    return (
        <div className='flex justify-center text-center items-center mt-7 bg-black bg-cover py-10 rounded-3xl' style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className='space-y-8'>
                <div className='flex justify-center'>
                    <img src={bannerImg} alt="" />
                </div>
                <h1 className='text-7xl font-bold text-white'>Aseemble your Ultimate Dream 11 Cricket Team</h1>
                <h2 className='text-2xl text-gray-500'>Beyond Boundaries Beyond Limits</h2>
                <button onClick={() => { claimCoins(), notify() }} className='btn bg-amber-400 text-black text-3xl'>Claim Free Credit</button>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
            </div>
        </div>
    );
};

export default Banner;