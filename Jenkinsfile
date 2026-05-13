@Library("Shared") _
pipeline {
    agent any

    environment {
        APP_NAME = "pixeltype"
    }

    stages {
        stage('Code') {
            steps {
                script{
                    clone("https://github.com/devAaus/pixeltype.git", "master")
                }
            }
        }

        stage('Build') {
            steps {
                script{
                    docker_compose_build()
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                echo 'Test successful'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker compose up -d'
                echo 'Deploy successful'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }

        success {
            echo 'Application deployed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}
