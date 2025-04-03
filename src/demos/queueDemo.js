import { Queue } from '../dataStructures/queue.js';
import { display } from '../utils/display.js';

export function runBasicQueueDemo() {
  document.getElementById('output').innerHTML = '';
  display('=== Basic Queue Demo ===');
  
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

export function runPrinterQueueDemo() {
  document.getElementById('output').innerHTML = '';
  display('=== Printer Queue Demo ===');
  
  const printerQueue = new Queue();
  
  // Simulate adding print jobs
  const printJobs = [
    { id: 1, name: 'Report.pdf', pages: 5 },
    { id: 2, name: 'Photo.jpg', pages: 1 },
    { id: 3, name: 'Document.docx', pages: 3 }
  ];
  
  display('Adding print jobs to queue:');
  printJobs.forEach(job => {
    printerQueue.enqueue(job);
    display(`Added: ${job.name} (${job.pages} pages)`);
  });
  
  display('\nProcessing print jobs:');
  while (!printerQueue.isEmpty()) {
    const job = printerQueue.dequeue();
    display(`Printing ${job.name}... ${job.pages} pages`);
  }
  
  display('\nAll print jobs completed!');
  display('Queue is empty: ' + printerQueue.isEmpty());
}