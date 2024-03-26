﻿using HPTA.Data.Entities;
using HPTA.Repositories.Contracts;
using Microsoft.EntityFrameworkCore;

namespace HPTA.Repositories
{
    public class SurveyQuestionRepository(HPTADbContext dbContext) : ISurveyQuestionRepository
    {
        private readonly HPTADbContext _dbContext = dbContext;

        public IQueryable<SurveyQuestion> ListQuestionsBySurveyId(int surveyId)
        {
            return _dbContext.SurveyQuestions.Include(q => q.Question).Where(q => q.SurveyId == surveyId);
        }
    }
}
