function Employee(props) {
    return (
        <tr>    
            <th scope="row">{props.id}</th>
            <td>
                <img             
                    src={'https://ui-avatars.com/api/?background=random&color=ffffff&name='+props.nom}
                    alt="ems"
                    width={30}
                    height={30}
                    className="rounded-circle me-2"
                />
                {props.nom}
            </td>
            <td>{props.salaire}DH</td>
        </tr>
  )}
  
  export default Employee;