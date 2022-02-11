import {useLocation, useNavigate, useParams} from 'react-router-dom'

export const withRouter = Component => {
    function ComponentWithRouterProp(props){
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
        history = {navigate}
          {...props}
          router={{ location, navigate, params }}
        />
      )
    }
    
    return ComponentWithRouterProp
  }