import { Queue } from '../dataStructures/queue.js';
import { display } from '../utils/display.js';

export function runQueueDemo() {
  display('=== Queue Demo ===');
  
  const queue = new Queue();
  
  display('Enqueuing elements: A, B, C');
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');
  
  display('Current queue:');
  display(queue.items);
  
  display('Dequeuing element: ' + queue.dequeue());
  
  display('Front element: ' + queue.front());
  
  display('Queue size: ' + queue.size());
  
  display('Is queue empty? ' + queue.isEmpty());
  
  display('Clearing queue...');
  queue.clear();
  
  display('Is queue empty now? ' + queue.isEmpty());
}