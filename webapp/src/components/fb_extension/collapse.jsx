import React from 'react';
import './collapse.scss';
import PropTypes from 'prop-types';

export default class PostButtonAction extends React.PureComponent {
    static propTypes = {
        open: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className='wrapper'>
                <div
                    className='panel-group'
                    id='accordion'
                >
                    <div className='panel panel-default'>
                        <div className='panel-heading'>
                            <h4 className='panel-title'>
                                <a
                                    data-toggle='collapse'
                                    data-parent='#accordion'
                                    href='#collapse1'
                                >
                                    {'Chợ Việt Live Stream'}
                                </a>
                            </h4>
                        </div>
                        <div
                            id='collapse1'
                            className='panel-collapse collapse in'
                        >
                            <div className='panel-body'>
                                <form
                                    className='form-horizontal'
                                    action='/'
                                >
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='fanpage'
                                        >
                                            {'Fanpage name:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='fanpage'
                                            placeholder='Enter fanpage name ...'
                                            name='fanpage'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='facebook'
                                        >
                                            {'Facebook token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='facebook'
                                            placeholder='Enter facebook token ...'
                                            name='facebook'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='verify'
                                        >
                                            {'Verify token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='verify'
                                            placeholder='Enter verify token ...'
                                            name='verify'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='mattermost'
                                        >
                                            {'Mattermost token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='mattermost'
                                            placeholder='Enter mattermost token ...'
                                            name='mattermost'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='channel'
                                        >
                                            {'Default channel:'}
                                        </label>
                                        <select
                                            id='channel'
                                            name='channel'
                                            className='form-control'
                                        >
                                            <option selected={true}>{'Town square'}</option>
                                            <option>{'zBot'}</option>
                                            <option>{'Off-Topic'}</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <button
                                            type='submit'
                                            className='btn btn-info'
                                        >
                                            <i className='fa fa-save'/>
                                            {'Save'}
                                        </button>
                                        <button
                                            type='submit'
                                            className='btn btn-info'
                                        >
                                            <i className='fa fa-trash'/>
                                            {'Delete'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='panel panel-default'>
                        <div className='panel-heading'>
                            <h4 className='panel-title'>
                                <a
                                    data-toggle='collapse'
                                    data-parent='#accordion'
                                    href='#collapse2'
                                >
                                    {'Cenlia Cosmetic'}
                                </a>
                            </h4>
                        </div>
                        <div
                            id='collapse2'
                            className='panel-collapse collapse'
                        >
                            <div className='panel-body'>
                                <form
                                    className='form-horizontal'
                                    action='/'
                                >
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='fanpage'
                                        >
                                            {'Fanpage name:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='fanpage'
                                            placeholder='Enter fanpage name ...'
                                            name='fanpage'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='facebook'
                                        >
                                            {'Facebook token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='facebook'
                                            placeholder='Enter facebook token ...'
                                            name='facebook'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='verify'
                                        >
                                            {'Verify token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='verify'
                                            placeholder='Enter verify token ...'
                                            name='verify'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='mattermost'
                                        >
                                            {'Mattermost token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='mattermost'
                                            placeholder='Enter mattermost token ...'
                                            name='mattermost'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='channel'
                                        >
                                            {'Default channel:'}
                                        </label>
                                        <select
                                            id='channel'
                                            name='channel'
                                            className='form-control'
                                        >
                                            <option selected={true}>{'Town square'}</option>
                                            <option>{'zBot'}</option>
                                            <option>{'Off-Topic'}</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <button
                                            type='submit'
                                            className='btn btn-info'
                                        >
                                            <i className='fa fa-save'/>
                                            {'Save'}
                                        </button>
                                        <button
                                            type='submit'
                                            className='btn btn-info'
                                        >
                                            <i className='fa fa-trash'/>
                                            {'Delete'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='panel panel-default'>
                        <div className='panel-heading'>
                            <h4 className='panel-title'>
                                <a
                                    data-toggle='collapse'
                                    data-parent='#accordion'
                                    href='#collapse3'
                                >
                                    {'Miss Kim Review'}
                                </a>
                            </h4>
                        </div>
                        <div
                            id='collapse3'
                            className='panel-collapse collapse'
                        >
                            <div className='panel-body'>
                                <form
                                    className='form-horizontal'
                                    action='/'
                                >
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='fanpage'
                                        >
                                            {'Fanpage name:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='fanpage'
                                            placeholder='Enter fanpage name ...'
                                            name='fanpage'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='facebook'
                                        >
                                            {'Facebook token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='facebook'
                                            placeholder='Enter facebook token ...'
                                            name='facebook'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='verify'
                                        >
                                            {'Verify token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='verify'
                                            placeholder='Enter verify token ...'
                                            name='verify'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='mattermost'
                                        >
                                            {'Mattermost token:'}
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='mattermost'
                                            placeholder='Enter mattermost token ...'
                                            name='mattermost'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='control-label'
                                            htmlFor='channel'
                                        >
                                            {'Default channel:'}
                                        </label>
                                        <select
                                            id='channel'
                                            name='channel'
                                            className='form-control'
                                        >
                                            <option selected={true}>{'Town square'}</option>
                                            <option>{'zBot'}</option>
                                            <option>{'Off-Topic'}</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <button
                                            type='submit'
                                            className='btn btn-info'
                                        >
                                            <i className='fa fa-save'/>
                                            {'Save'}
                                        </button>
                                        <button
                                            type='submit'
                                            className='btn btn-info'
                                        >
                                            <i className='fa fa-trash'/>
                                            {'Delete'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='button-footer'>
                    <button
                        onClick={this.props.open}
                        className='btn btn-info'
                    >
                        {'Integrate new Fanpage'}
                    </button>

                    <a
                        href='https://www.google.com/'
                    >
                        {'Help'}
                    </a>
                </div>
            </div>
        );
    }
}