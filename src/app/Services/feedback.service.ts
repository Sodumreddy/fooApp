import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  // Get all feedback
  getallfeedback() {
    return this.http.get('http://localhost:8081/feedback');
  }

  // Get feedback by ID
  getfeedbackbyId(id: string) {
    return this.http.get(`http://localhost:8081/feedback/${id}`);
  }

  // Save feedback
  savefeedback(feedbackDto: any) {
    return this.http.post('http://localhost:8081/feedback', feedbackDto);
  }

  // Update feedback by ID
  Updatefeedbackbyid(id: string, feedbackDto: any) {
    return this.http.put(`http://localhost:8081/feedback/${id}`, feedbackDto);
  }

  // Delete feedback by ID
  deletefeedback(id: string) {
    return this.http.delete(`http://localhost:8081/feedback/${id}`);
  }
}
