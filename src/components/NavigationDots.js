import React from 'react';
const NavigationDots =({active}) =>(
    <div className="app_navigation">
        {['home','about','work','testimonial','conatct'].map((item,index) =>(
            <a
            href={`#${item}`}
            key={item+index}
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#313BAC'} : {}}
            />
        ))}
    </div>
)

export default NavigationDots