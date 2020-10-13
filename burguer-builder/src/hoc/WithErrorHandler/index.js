import React, { Component } from 'react'
import Modal from '../../components/UI/Modal'
import Aux from '../Aux'

const WithErrorHandler = (WrapperdComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                })
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
            })
        }

        componentWillUnmount() {
            //remove interceptor when components end. Not create a lot of
            // interceptors when whe re use this components
            axios.interceptors.request.ejec(this.reqInterceptor)
            axios.interceptors.request.ejec(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler} >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperdComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default WithErrorHandler