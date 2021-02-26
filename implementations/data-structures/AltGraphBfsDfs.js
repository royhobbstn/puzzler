function bfsTraversal(g) {
  if (g.vertices < 1) {
    return null;
  }

  var result = '';

  let queue = new Queue(g.vertices);
  queue.enqueue(0);
  visited[0] = true;

  while (queue.isEmpty() == false) {
    let current_node = queue.dequeue();
    result += String(current_node);
    let temp = g.list[current_node].getHead();
    while (temp != null) {
      if (!visited[temp.data]) {
        queue.enqueue(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }

  return result;
}

function dfsTraversal(g) {
  if (g.vertices < 1) {
    return null;
  }

  var result = '';

  let stack = new Stack(g.vertices);
  stack.push(0);
  visited[i] = true;

  while (stack.isEmpty() == false) {
    let current_node = stack.pop();
    result += String(current_node);
    let temp = g.list[current_node].getHead();
    while (temp != null) {
      if (!visited[temp.data]) {
        stack.push(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }

  return result;
}

function checkPath(g, source, destination) {
  if (source == destination) {
    return true;
  }

  let visited = [];

  let stack = new Stack();
  stack.push(source);
  visited[source] = true;

  while (stack.isEmpty() == false) {
    let current_node = stack.pop();

    let temp = g.list[current_node].head;
    while (temp != null) {
      if (!visited[temp.data]) {
        if (temp.data == destination) {
          return true;
        }
        stack.push(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }

  return false;
}
