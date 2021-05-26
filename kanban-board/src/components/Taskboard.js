import { Component } from 'react';
import { connect } from 'react-redux';
import Group from './Group';


class Taskboard extends Component {
  render() {
    const { groups } = this.props;
    return (
        <section className="taskboard">
          <h2 className="visually-hidden">Ваши задачи:</h2>
          {
            groups.map((group) => (<Group 
              title={group.title}
              className={group.className}
              tasks={group.tasks} 
              groupId={group.id}
              key={group.id} />))
          }
        </section>
    )
  }
}

const mapStateToProps = state => ({
  groups: state.groups
})
 
export default connect(mapStateToProps)(Taskboard);