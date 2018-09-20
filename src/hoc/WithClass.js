import React, {Component}  from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     );
// }
//
const withClass = (WrappedComponent, className) => {
    return class extends Component  {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardRef} {...this.props} />
                </div>
            )
        }
    }
}

export default withClass;