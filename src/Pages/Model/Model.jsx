import React from 'react';
import './Model.css';

const Model = () => {
  return (
    <div>
      <div className="ModelPage">
      <div class="containerModel">
      <div class="topicModel">Utilizing Models in AI Applications</div>
      <div class="contentModel">
        <input type="radio" name="slider" checked id="home" />
        <input type="radio" name="slider" id="func" />
        <input type="radio" name="slider" id="feat" />
        <input type="radio" name="slider" id="accu" />
        <input type="radio" name="slider" id="refe" />
        <div class="list">
          <label for="home" class="home">
            <span class="title">Name</span>
          </label>
          <label for="func" class="func">
            <span class="title">Functionality</span>
          </label>
          <label for="feat" class="feat">
            <span class="title">Features</span>
          </label>
          <label for="accu" class="accu">
            <span class="title">Accuracy</span>
          </label>
          <label for="refe" class="refe">
            <span class="title">References</span>
          </label>
          <div class="slider"></div>
        </div>
        <div class="text-content">
          <div class="home text">
            <div class="title">Model Name</div>
            <p>
              Rexnet 150
            </p>
          </div>
          <div class="func text">
            <div class="title">Model Functionality</div>
            <p>
            The model is designed for plant disease classification using images of crop leaves. It distinguishes between healthy and diseased leaves and identifies the specific disease affecting the plant. The model leverages the RexNet-150 architecture, optimized for high accuracy in image classification tasks.
            </p>
          </div>
          <div class="feat text">
            <div class="title">Model Features</div>
            <p>
            RexNet Architecture: Utilizes residual blocks for improved gradient flow, preventing overfitting, and addressing the vanishing gradient problem.
            GPU Utilization: Employs GPUs for efficient processing of large datasets, enhancing training speed and capability to handle complex models.
            Data Handling: Utilizes PyTorch's torchvision.datasets.ImageFolder for loading and managing image datasets.
            </p>
            <p>
            Training Mechanisms: Implements functions for training and validation, including training_step, validation_step, validation_epoch_end, and epoch_end. It also uses advanced techniques like learning rate scheduling and gradient clipping.
            </p>
          </div>
          <div class="accu text">
            <div class="title">Model Accuracy</div>
            <p>
            Training Accuracy: Achieved an accuracy of 97.6% after 10 epochs.
            Validation Accuracy: Reached 95.1% after 10 epochs.
            Test Accuracy: The model demonstrated an impressive accuracy of 95.3% on test data, indicating strong performance and generalization capability.
            </p>
          </div>
          <div class="refe text">
            <div class="title">Model References</div>
            <p>
            Kaggle Notebook: The details and implementation of the model can be found in the Kaggle notebook: Plant Diseases Classification using PyTorch.
            PyTorch Documentation: Refer to PyTorch's official documentation for further understanding of the torchvision.datasets and RexNet architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Model
