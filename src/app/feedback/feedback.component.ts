import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../Services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      review: ['',Validators.required] ,
    });
  }

  submitFeedback() {
    if (this.feedbackForm.valid) {
      const formData = this.feedbackForm.value;
      console.log('FormData:', formData); // Log the data before sending
      // Assuming userId and review are properties of feedbackForm, adjust as needed
      const feedbackDto = {
        userId: formData.userId,
        review: formData.review
      };

      this.feedbackService.savefeedback(feedbackDto).subscribe(
        response => {
          console.log('Response from backend:', response);
          // Handle the response if needed
        },
        error => {
          console.error('Error from backend:', error);
          // Handle the error if needed
        }
      );

      this.submitted = true;
      // You might want to reset the form or clear the form fields after submission
      this.feedbackForm.reset();
    }
  }
}


