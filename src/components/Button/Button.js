import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

const Button = ({
                  className = '',
                  isLoading = false,
                  icon = faCog,
                  type = 'button',
                  disabled = false,
                  content = '',
                  onClick = () => {}
                }) => {
  return <button type={type}
                 onClick={onClick}
                 className={className}
                 disabled={isLoading || disabled}>
    {isLoading ? <FontAwesomeIcon data-testid="spinner" icon={icon} spin/> : content}
  </button>
}

export default Button;
