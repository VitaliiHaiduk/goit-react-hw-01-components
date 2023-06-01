import PropTypes from 'prop-types';


export default function FriendListItem ( {avatar, name, isOnline=true} ){
    return(
        <li class="item">
           <span class="status">{isOnline}</span>
           <img class="avatar" src={avatar} alt={name} width="48" />
           <p class="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}