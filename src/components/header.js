import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const StyleHeader = styled.header`
        background: rebeccapurple;
        marginBottom: 1.45rem;
        margin: 0 auto;
        maxWidth: 960;
        padding: 1.45rem 1.0875rem;
        width: 100%;
        height: 5.25rem;
        padding: 0 15.5rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        `

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: white;
`



const Header = ({ siteTitle }) => {
    return (
        <StyleHeader>
                <Link to="/">
                <StyledLogo> S </StyledLogo>

                    {siteTitle}
                </Link>
        </StyleHeader>

)
}


// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )
//
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
