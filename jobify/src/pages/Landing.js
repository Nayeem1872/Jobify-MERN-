
import main from '../assets/images/main.svg'
// import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage'
// import Logo from '../components/Logo'
import {Logo} from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return <Wrapper>
    <nav>
        <Logo/>
    </nav>

     <div className='conatiner page'>
        <div className='info'>
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>
            On such systems, applications had to talk directly to the Teletype machine and follow its conventions since the concept of device drivers hiding such hardware details from the application was not yet well developed. Therefore, text was routinely composed to satisfy the needs of Teletype machines. Most minicomputer systems from DEC used this convention. CP/M also used it in order to print on the same terminals that minicomputers used. From there MS-DOS (1981) adopted CP/M's CR+LF in order to be compatible, and this convention was inherited by Microsoft's later Windows operating system.
            </p>
            <Link to="/register" className='btn btn-hero'>Login/Register</Link>
        </div>

        <img src={main} alt='job hunt' className='img main-img' />

     </div>

  </Wrapper>
}

// const Wrapper = styled.main`
//     nav{
//         width: var(--fluid-width);
//         max-width: var(--max-width);
//         margin: 0 auto;
//         height: var(--nav-height);
//         display: flex;
//         align-items: center;

//     }
//     .page{
//         min-height: calc(100vh - var(--nav-height));
//         display: grid;
//         align-items: center;
//         margin-top: -3rem;
//         position: absolute;
//         right: 0;
        
//     }
//     h1{
//         font-weight: 700;
//         span{
//             color: var(--primary-500);
            
//         }
//     }
//     p{
//         color: var(--grey-600);
//     }
//     .main-img{
//         display: none;
//     }
//     @media (min-width: 992px) {
//         .page{
//             grid-template-columns: 1fr 1fr;
//             column-gap: 3rem;
//         }
//         .main-img{
//             display: block;
//         }
        
//     }

// `

export default Landing 