export default function SocialTextInput ({ label, style }){
    return (
        <div style={style}>
            {label && <label style={{fontSize: 10,marginLeft: 5}}>{label}</label>}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type='text' style={{width: '100%', border: 'none', backgroundColor: '#f0f4ff', outline: 'none'}}/>
                <input type='text' style={{width: '100%',backgroundColor: '#f0f4ff', borderTop: 'none',borderBottom: 'none',borderLeft: '1px dashed #000',borderRight: '1px dashed #000', outline: 'none'}}/>
                <input type='text' style={{width: '100%',backgroundColor: '#f0f4ff', border: 'none',outline: 'none'}}/>
            </div>
        </div>
    )
}