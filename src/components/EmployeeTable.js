import React from 'react'

function EmployeeTable(props) {
    const { users } = props
    return ( <
        table className = "list-group" > {
            users.map(item => ( <
                tr className = "list-group-item"
                key = { item.id } > { item.name } <
                /tr>
            ))
        } <
        /table>
    );

}
export default EmployeeTable