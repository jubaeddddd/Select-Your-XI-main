import logo from '../../assets/logo.png'
import Banner from '../Banner/Banner';

const Header = ({claimCoins,coins}) => {
    return (
        <div>
            {/* nav bar  */}
            <div className='flex items-center justify-between'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div >
                    <div className="flex items-center gap-8 text-2xl font-bold">
                        <p>Home</p>
                        <p>Fixture</p>
                        <p>Teams</p>
                        <p>Schedules</p>
                        <p className="flex items-center">{coins} Coin <img src="https://img.icons8.com/?size=48&id=OFHwDWASQWmX&format=png" alt="" /></p>
                    </div>
                </div>
            </div>
            {/* banner  */}
            <Banner claimCoins={claimCoins}></Banner>
        </div>
    );
};

export default Header;