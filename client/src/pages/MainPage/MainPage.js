import React from 'react';
import Tabs from '../../components/Tabs'
import Footer from '../../components/Footer'
import Dropdowns from '../../components/Dropdowns/Dropdowns';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "",
            catagory: "",
            clothingDropdowns: false,
            nonClothingDropdowns: false,
            searchBarOn: false,
            graphOn: false,
            listOn: false,
            catagories: ""
        }
    }

    componentDidMount() {
        console.log("componenet did mount");
        fetch("http://open.api.ebay.com/Shopping?callname=GetCategoryInfo&appid=MaureenB-Improved-PRD-a5d7504c4-a5fecda0&responseencoding=JSON&siteid=3&CategoryID=-1&version=729&IncludeSelector=ChildCategories")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        catagories: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error);
                }
            )
    }


    triggerSetClothing = () => {
        this.setState({
            ...this.state,
            nonClothingDropdowns: false,
            clothingDropdowns: true,
            searchBarOn: true,
        })
    }

    triggerSetNonClothing = () => {
        this.setState({
            ...this.state,
            clothingDropdowns: false,
            nonClothingDropdowns: true,
            searchBarOn: true
        })
    }

    render() {
        return (
            <div>
                <div className="content">
                    <header>
                        <div className="bubbles cntr">
                            <h1>Pricing Tool</h1>
                        </div>
                    </header>
                    <div className="container">
                        <Tabs
                            setClothing={this.triggerSetClothing}
                            setNonClothing={this.triggerSetNonClothing}
                        />
                    </div>
                    {this.state.clothingDropdowns && <Dropdowns />}
                    {this.state.nonClothingDropdowns && <Dropdowns />}
                </div>
                <Footer />
            </div>
        );
    }
}

export default MainPage;
