
export default function CheckBox ({ label, style }){
    return (
        <div style={style}>
            <div style={{display: 'flex'}}>
                <input type='checkbox'/>
                {label && <label style={{marginLeft: 5,marginRight: 10, fontSize: 12}}>{label}</label>}
            </div>
        </div>
    )
}