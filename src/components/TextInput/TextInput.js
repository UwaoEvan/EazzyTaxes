export default function TextInput ({ label, style }){
    return (
        <div style={style}>
            <label style={{fontSize: 10,marginLeft: 5}}>{label}</label>
            <input type='text' style={{backgroundColor: '#f0f4ff', width: '100%', border: 'none', outline: 'none'}}/>
        </div>
    )
}