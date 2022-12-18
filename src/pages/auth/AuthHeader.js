import './AuthHeader.css'

const AuthHeader = () => {
  return (
    <div className="auth-header">
        <img className='logo' src={'https://static.athome.com/images/w_800,h_800,c_pad,f_auto,fl_lossy,q_auto/v1629487637/p/124194581/7oz-champagne-flute-glass.jpg'} alt="logo" />
        <span className="title">The Library</span>
    </div>
  );
}

export default AuthHeader;