import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
export default (props)=>{
return(
<Sparklines height={props.height} width={props.width} data={props.data}>
            <SparklinesLine color={props.color} />
            </Sparklines>
            )

}