package com.exam.service.impl;

import com.exam.dto.ApiResponse;
import com.exam.dto.ReqQuiz;
import com.exam.dto.ReqUpdateQuiz;
import com.exam.dto.RespQuizDto;
import com.exam.entity.Quiz;
import com.exam.repository.QuizRepository;
import com.exam.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public Quiz addQuiz(ReqQuiz reqQuiz) {
        Quiz quiz = new Quiz();
        quiz.setTitle(reqQuiz.getTitle());
        quiz.setActive(true);  // New quizzes are active by default
        return quizRepository.save(quiz);
    }

    @Override
    public ApiResponse updateQuiz(ReqUpdateQuiz reqUpdateQuiz) {
        Quiz quiz = quizRepository.findById(reqUpdateQuiz.getQuizId()).orElse(null);
        if (quiz == null) {
            return new ApiResponse(false, "Quiz not found!");
        }
        quiz.setTitle(reqUpdateQuiz.getTitle());
        quizRepository.save(quiz);
        return new ApiResponse(true, "Quiz updated successfully!");
    }

    @Override
    public List<Quiz> getAllQuiz() {
        return quizRepository.findAll();
    }

    @Override
    public Quiz getQuiz(Long quizId) {
        return quizRepository.findById(quizId).orElse(null);
    }

    @Override
    public int deleteQuiz(Long quizId) {
        quizRepository.deleteById(quizId);
        return 1;
    }

    @Override
    public List<RespQuizDto> getBySubjectId(Long subjectId) {
        return quizRepository.findBySubjectId(subjectId)
                .stream()
                .map(q -> new RespQuizDto(q.getId(), q.getTitle()))
                .collect(Collectors.toList());
    }

    // ✅ 1. Pagination: Fetch quizzes in pages
    @Override
    public List<Quiz> getQuizzesPaged(int page, int size) {
        return quizRepository.findAll()
                .stream()
                .skip(page * size)
                .limit(size)
                .collect(Collectors.toList());
    }

    // ✅ 2. Search: Find quizzes by title
    @Override
    public List<Quiz> searchQuizzes(String title) {
        return quizRepository.findAll()
                .stream()
                .filter(q -> q.getTitle().toLowerCase().contains(title.toLowerCase()))
                .collect(Collectors.toList());
    }

    // ✅ 3. Get only active quizzes
    @Override
    public List<Quiz> getActiveQuizzes() {
        return quizRepository.findAll()
                .stream()
                .filter(Quiz::isActive)
                .collect(Collectors.toList());
    }

    // ✅ 4. Random Quiz Generator: Fetch random quizzes
    @Override
    public List<Quiz> getRandomQuizzes(int count) {
        List<Quiz> allQuizzes = quizRepository.findAll();
        Random rand = new Random();
        return rand.ints(0, allQuizzes.size())
                .distinct()
                .limit(count)
                .mapToObj(allQuizzes::get)
                .collect(Collectors.toList());
    }
}
