﻿using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class EnemyCounter : NetworkBehaviour
{
    [Header("Enemies")]
    [Tooltip("Text component for displaying enemy objective progress")]
    public Text enemiesText;

    EnemyManager m_EnemyManager;

    void Awake()
    {
        m_EnemyManager = FindObjectOfType<EnemyManager>();
        DebugUtility.HandleErrorIfNullFindObject<EnemyManager, EnemyCounter>(m_EnemyManager, this);
    }

    void Update()
    {
        enemiesText.text = m_EnemyManager.numberOfEnemiesRemaining + "/" + m_EnemyManager.numberOfEnemiesTotal;
    }
}
