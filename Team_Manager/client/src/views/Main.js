import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default () => {
    
    return (
        <div>
            <h1><Link to="/players/list"> Manage players </Link> | <Link to="/status/games/game1"> Manage player status </Link></h1>
        </div>
    )
}