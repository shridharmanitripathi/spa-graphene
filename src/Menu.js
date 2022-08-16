
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
class Menu extends React.Component {
    state = {
        isLoading: true,
        menu: [],
        error: null
    };

    groupBy(arr, property) {
        return arr.reduce((acc, cur) => {
            acc[cur[property]] = [...acc[cur[property]] || [], cur];
            return acc;
        }, {});
    }

    fetchUsers() {
        fetch(`https://studiographene-exercise-api.herokuapp.com/foods`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    menu: data,
                });
                this.setState({
                    menu: this.groupBy(this.state.menu, "type"),
                    isLoading: false,
                })
            }


            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    }


    render() {
        const RenderCategoryWise = (props) => {
            return props.type.map((menuItem, index) => {
                const { title, description, price, type, id } = menuItem;
                return (
                    <div key={id}>
                        <p>Name: {title}</p>
                        <p>Desc: {description}</p>
                        <p>price: {price}</p>
                        <p>Type: {type}</p>
                        <hr />

                    </div>


                );
            })

        }
        const { isLoading, menu, error } = this.state;
        const { starters, sides, desserts, main_courses } = menu;

        return (
            <React.Fragment>
                <div className='row'>
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (

                        <Parallax pages={starters.length} style={{ width: '22%', paddingTop: '10%' }}>
                            <ParallaxLayer offset={0} speed={0.5}>
                                <div className='col-md-12'>
                                    <RenderCategoryWise type={starters} />
                                </div>
                            </ParallaxLayer>
                        </Parallax>

                    ) : (
                        <h3>Loading...</h3>
                    )
                    }
                    {
                        !isLoading ? (
                            <Parallax pages={sides.length} style={{ width: "22%", marginLeft: '22%', paddingTop: '10%' }}>
                                <ParallaxLayer offset={0} speed={-2}>
                                    <div className='col-md-12'>
                                        <RenderCategoryWise type={sides} />
                                    </div>
                                </ParallaxLayer>
                            </Parallax>
                        ) : (
                            <h3>Loading...</h3>
                        )
                    }
                    {
                        !isLoading ? (
                            <Parallax pages={desserts.length} style={{ width: "22%", marginLeft: '44%', paddingTop: '10%' }}>
                                <ParallaxLayer offset={0} speed={0.5}>
                                    <div className='col-md-12'>
                                        <RenderCategoryWise type={desserts} />
                                    </div>
                                </ParallaxLayer>
                            </Parallax>
                        ) : (
                            <h3>Loading...</h3>
                        )
                    }

                    {
                        !isLoading ? (
                            <Parallax pages={main_courses.length} style={{ width: "22%", marginLeft: '66%', paddingTop: '10%' }}>
                                <ParallaxLayer offset={0} speed={-2} style={{ overflowY: 'scroll' }}>
                                    <div className='col-md-12'>
                                        <RenderCategoryWise type={main_courses} />
                                    </div>
                                </ParallaxLayer>
                            </Parallax>
                        ) : (
                            <h3>Loading...</h3>
                        )
                    }
                </div >
            </React.Fragment >
        );
    }
}


export default Menu;