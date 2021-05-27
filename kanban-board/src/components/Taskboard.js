import { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../store/actions';
import Group from './Group';


class Taskboard extends Component {

  onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
    ))

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
