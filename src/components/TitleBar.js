import React from 'react'

export const TitleBar = ({ collectionItem, totalItems }) => {

    return (
        <section id="search-results">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
                        <h1>{ collectionItem.ancestors[2].name }</h1>
                        <h4>{ collectionItem.ancestors[1].name } - { collectionItem.ancestors[0].name } </h4>
					</div>
				</div>
				<div className="pull-right"><h5>{ totalItems } results</h5></div>
			</div>
			<div className="container-fluid">
				<div className="row project-title">
					<div className="col-sm-3">
						
					</div>
					<div className="col-sm-3">
						<a href="index.html">title</a>
					</div>
					<div className="col-sm-3">
						<a href="index.html">year</a>
					</div>
					<div className="col-sm-3 hidden-xs">
						description
					</div>
				</div>
            </div>
        </section>
    
    )
}
