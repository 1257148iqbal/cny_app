// ** React Imports
// ** Third Party Components
import '@custom-styles/basic/custom-stepper.scss';
import Stepper from 'bs-stepper';
// ** Styles
import 'bs-stepper/dist/css/bs-stepper.min.css';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';
import { forwardRef, Fragment, useEffect, useState } from 'react';
import { ChevronRight } from 'react-feather';


const CustomSteeper = forwardRef( ( props, ref ) => {
  // ** Props
  const { type, className, steps, separator, options, instance } = props;

  // ** State
  const [activeIndex, setActiveIndex] = useState( 0 );

  // ** Vars
  let stepper = null;

  // ** Step change listener on mount
  useEffect( () => {
    stepper = new Stepper( ref.current, options );


    ref.current.addEventListener( 'shown.bs-stepper', function ( event ) {
      setActiveIndex( event.detail.indexStep );
    } );

    if ( instance ) {
      instance( stepper );
    }
  }, [] );

  // ** Renders Wizard Header
  const renderHeader = () => {
    return steps.map( ( step, index ) => {
      return (
        <Fragment key={step.id}>
          {index !== 0 && index !== steps.length ? <div className='line'>{separator}</div> : null}
          <div
            className={classnames( 'step', {
              crossed: activeIndex > index,
              active: index === activeIndex
            } )}
            data-target={`#${step.id}`}
          >
            <button type='button' className='step-trigger rounded-0'>
              <span className='bs-stepper-label'>
                <div className='bs-title-icon'>
                  <span className='bs-stepper-icon'>{step.icon ? step.icon : index + 1}</span>
                  <span className='bs-stepper-title'>{step.title}</span>
                </div>
              </span>
            </button>
          </div>
        </Fragment>
      );
    } );
  };
  const renderHeaderForSmallDevice = () => {
    return steps.map( ( step, index ) => {
      return (
        <Fragment key={step.id}>
          {index !== 0 && index !== steps.length ? <div className='line'>{separator}</div> : null}
          <div
            className={classnames( 'step', {
              crossed: activeIndex > index,
              active: index === activeIndex
            } )}
            data-target={`#${step.id}`}
          >
            <button type='button' className='step-trigger rounded-0'>
              <span className='bs-stepper-label'>
                <div className='bs-title-icon'>
                  <span className='bs-stepper-icon'>{step.icon ? step.icon : index + 1}</span>
                </div>
              </span>
            </button>
          </div>
        </Fragment>
      );
    } );
  };

  // ** Renders Wizard Content
  const renderContent = () => {
    return steps.map( ( step, index ) => {
      return (
        <div
          className={classnames( 'content', {
            'active dstepper-block': activeIndex === index
          } )}
          id={step.id}
          key={step.id}
        >
          {step.content}
        </div>
      );
    } );
  };

  return (
    <div
      ref={ref}
      className={classnames( 'bs-stepper', {
        [className]: className,
        vertical: type === 'vertical',
        'vertical wizard-modern': type === 'modern-vertical',
        'wizard-modern': type === 'modern-horizontal'
      } )}
    >
      {/* <div className='bs-stepper-header d-none d-xl-flex  d-lg-flex d-md-flex'>{renderHeader()}</div> */}
      <div className='bs-stepper-header'>{renderHeader()}</div>
      {/* <div className='bs-stepper-header d-none d-xs-flex d-sm-flex'>{renderHeaderForSmallDevice()}</div> */}
      <div className='bs-stepper-content'>{renderContent()}</div>
    </div>
  );
} );

export default CustomSteeper;

// ** Default Props
CustomSteeper.defaultProps = {
  type: 'horizontal',
  separator: <ChevronRight size={17} />,
  options: {}
};

// ** PropTypes
CustomSteeper.propTypes = {
  type: PropTypes.string,
  instance: PropTypes.func,
  options: PropTypes.object,
  className: PropTypes.string,
  separator: PropTypes.element,
  steps: PropTypes.arrayOf(
    PropTypes.shape( {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      icon: PropTypes.any,
      content: PropTypes.any.isRequired
    } )
  ).isRequired
};
