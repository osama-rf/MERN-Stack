import React,{useState} from "react";

const Tabs = (props) => {
    const {tab, setTab} = props;

    const onClickHandler = (index) => {
        setTab({
            ...tab,
            selectedTab: index,
        });
    }

    return(
        <div>
            <nav className="nav justify-content-center">
                {
                    tab.content.map((tab, index)=>(
                        <div className="nav-link active" onClick={() => onClickHandler(index)}>
                            Tab {index +1}
                        </div>
                    ))
                }
            </nav>

            <div className="nav-link active">
                <p>{props.tab.content[props.tab.selectedTab]}</p>
            </div>
        </div>
    )
}

export default Tabs;