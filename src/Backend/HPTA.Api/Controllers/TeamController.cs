﻿using HPTA.Services.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HPTA.Api.Controllers;

[Route("api/[controller]")]
public class TeamController : BaseController
{
    private readonly ITeamService _teamService;

    public TeamController(ITeamService teamService)
    {
        _teamService = teamService;
    }

    [HttpGet]
    public async Task<ActionResult> GetAllTeams()
         => Ok(await _teamService.GetAllTeams());

    [HttpGet("result/{teamId?}")]
    [Authorize(AuthenticationSchemes = $"{AuthenticationSchemes.CustomJwt},{AuthenticationSchemes.AzureAD}")]
    public async Task<ActionResult> LoadChartData(int? teamId, int? surveyId)
        => Ok(await _teamService.LoadChartData(teamId, surveyId));

    [HttpGet("result-category/{categoryId}/{teamId?}")]
    [Authorize(AuthenticationSchemes = $"{AuthenticationSchemes.CustomJwt},{AuthenticationSchemes.AzureAD}")]
    public async Task<ActionResult> LoadCategoryChartData(int categoryId, int? teamId, int? surveyId)
            => Ok(await _teamService.LoadCategoryChartData(teamId: teamId, categoryId: categoryId, surveyId));

    [HttpGet("{teamId}/members")]
    public async Task<ActionResult> ListTeamMembers(int teamId) => Ok(await _teamService.ListTeamMembers(teamId));
}
