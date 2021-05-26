import { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Group from './Group';


class Taskboard extends Component {

  onDragEnd = () => {
    // TODO: reordering
  }

  render() {
    const { groups } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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
      </DragDropContext>
    )
  }
}

const mapStateToProps = state => ({
  groups: state.groups
})

export default connect(mapStateToProps)(Taskboard);
