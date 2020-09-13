import React from 'react'

export const Items = ({ items }) => {

    return (
        <div className="row project-item">
            {items.map(item => (
                <a key={ item.id } href="articleview.html">
                    <div className="col-sm-3">
                        <img
                        alt={item.attribute_values[0].value.text}
                        src={item.digital_assets[0].large_thumbnail}
                        />
                    </div>
                    <div className="col-sm-3 col">
                    {item.attribute_values[0].value.text}
                    </div>
                    <div className="col-sm-3 col">
                    {item.attribute_values[1].value.date}
                    </div>
                    <div className="col-sm-3">
                    {item.attribute_values[3].value.text}
                    </div>
                </a>
            ))}
        </div>
    )
}
